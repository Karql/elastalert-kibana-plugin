FROM docker.elastic.co/kibana/kibana:8.16.5

COPY ./plugins/elastalertKibanaPlugin-8.16.5.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.16.5.zip
