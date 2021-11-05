FROM docker.elastic.co/kibana/kibana:7.15.1

COPY ./plugins/elastalertKibanaPlugin-7.15.1.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-7.15.1.zip