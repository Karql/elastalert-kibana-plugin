FROM docker.elastic.co/kibana/kibana:8.14.2

COPY ./plugins/elastalertKibanaPlugin-8.14.2.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.14.2.zip
