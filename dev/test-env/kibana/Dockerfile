FROM docker.elastic.co/kibana/kibana:7.16.2

COPY ./plugins/elastalertKibanaPlugin-7.16.2.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-7.16.2.zip
